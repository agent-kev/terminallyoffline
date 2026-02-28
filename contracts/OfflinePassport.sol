// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title OfflinePassport
 * @notice Soulbound ERC-721 NFT for the Terminally Offline Club
 * @dev Transfers are disabled (soulbound) — passports cannot be traded.
 *      Only the contract owner can mint, ensuring passports are only
 *      issued after challenge verification.
 *
 * Deployment target: Base (Coinbase L2, chain ID 8453)
 *
 * Tiers:
 * - 0: Explorer  (7 days)
 * - 1: Wayfinder (30 days)
 * - 2: Navigator (90 days)
 * - 3: Sage      (365 days)
 */
contract OfflinePassport is ERC721, Ownable {
    uint256 private _nextTokenId;
    string private _baseTokenURI;

    enum Tier { Explorer, Wayfinder, Navigator, Sage }

    struct Passport {
        Tier tier;
        uint64 completionDate;
        uint64 issuedAt;
    }

    mapping(uint256 => Passport) public passports;
    mapping(address => bool) public hasMinted;

    event PassportIssued(
        uint256 indexed tokenId,
        address indexed holder,
        Tier tier,
        uint64 completionDate
    );

    error AlreadyHasPassport();
    error SoulboundToken();

    constructor(
        string memory baseURI
    ) ERC721("Offline Passport", "OFFPASS") Ownable(msg.sender) {
        _baseTokenURI = baseURI;
        _nextTokenId = 1;
    }

    /**
     * @notice Mint a passport to a verified challenge completer.
     * @dev Only callable by contract owner (Terminally Offline admin).
     *      Each address can only hold one passport.
     */
    function mint(
        address to,
        Tier tier,
        uint64 completionDate
    ) external onlyOwner returns (uint256) {
        if (hasMinted[to]) revert AlreadyHasPassport();

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);

        passports[tokenId] = Passport({
            tier: tier,
            completionDate: completionDate,
            issuedAt: uint64(block.timestamp)
        });

        hasMinted[to] = true;

        emit PassportIssued(tokenId, to, tier, completionDate);
        return tokenId;
    }

    /**
     * @notice Upgrade a passport tier (e.g., Explorer → Wayfinder).
     * @dev Only callable by contract owner. Does not mint a new token.
     */
    function upgradeTier(
        uint256 tokenId,
        Tier newTier,
        uint64 newCompletionDate
    ) external onlyOwner {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        require(uint8(newTier) > uint8(passports[tokenId].tier), "Can only upgrade");

        passports[tokenId].tier = newTier;
        passports[tokenId].completionDate = newCompletionDate;
    }

    /**
     * @notice Get the tier of a passport.
     */
    function getTier(uint256 tokenId) external view returns (Tier) {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        return passports[tokenId].tier;
    }

    /**
     * @notice Total number of passports issued.
     */
    function totalSupply() external view returns (uint256) {
        return _nextTokenId - 1;
    }

    // --- Soulbound: disable all transfers ---

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override returns (address) {
        address from = _ownerOf(tokenId);
        // Allow minting (from == address(0)) but block transfers
        if (from != address(0) && to != address(0)) {
            revert SoulboundToken();
        }
        return super._update(to, tokenId, auth);
    }

    // --- Metadata ---

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }
}
