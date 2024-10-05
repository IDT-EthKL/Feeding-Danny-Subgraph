import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ExperienceAdded,
  FishCaught,
  FishLeveledUp,
  GameMasterAdded,
  GameMasterRemoved,
  OwnershipTransferred,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createExperienceAddedEvent(
  tokenId: BigInt,
  amount: BigInt
): ExperienceAdded {
  let experienceAddedEvent = changetype<ExperienceAdded>(newMockEvent())

  experienceAddedEvent.parameters = new Array()

  experienceAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  experienceAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return experienceAddedEvent
}

export function createFishCaughtEvent(
  tokenId: BigInt,
  player: Address,
  species: string,
  size: BigInt,
  rarity: BigInt
): FishCaught {
  let fishCaughtEvent = changetype<FishCaught>(newMockEvent())

  fishCaughtEvent.parameters = new Array()

  fishCaughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  fishCaughtEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  fishCaughtEvent.parameters.push(
    new ethereum.EventParam("species", ethereum.Value.fromString(species))
  )
  fishCaughtEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  fishCaughtEvent.parameters.push(
    new ethereum.EventParam("rarity", ethereum.Value.fromUnsignedBigInt(rarity))
  )

  return fishCaughtEvent
}

export function createFishLeveledUpEvent(
  tokenId: BigInt,
  newLevel: BigInt
): FishLeveledUp {
  let fishLeveledUpEvent = changetype<FishLeveledUp>(newMockEvent())

  fishLeveledUpEvent.parameters = new Array()

  fishLeveledUpEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  fishLeveledUpEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )

  return fishLeveledUpEvent
}

export function createGameMasterAddedEvent(
  gameMaster: Address
): GameMasterAdded {
  let gameMasterAddedEvent = changetype<GameMasterAdded>(newMockEvent())

  gameMasterAddedEvent.parameters = new Array()

  gameMasterAddedEvent.parameters.push(
    new ethereum.EventParam(
      "gameMaster",
      ethereum.Value.fromAddress(gameMaster)
    )
  )

  return gameMasterAddedEvent
}

export function createGameMasterRemovedEvent(
  gameMaster: Address
): GameMasterRemoved {
  let gameMasterRemovedEvent = changetype<GameMasterRemoved>(newMockEvent())

  gameMasterRemovedEvent.parameters = new Array()

  gameMasterRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "gameMaster",
      ethereum.Value.fromAddress(gameMaster)
    )
  )

  return gameMasterRemovedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
