import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CrossChainInteraction,
  FishEaten,
  OwnershipTransferred,
  PlayerGrown
} from "../generated/Contract/Contract"

export function createCrossChainInteractionEvent(
  originChain: BigInt,
  player: Address,
  fishId: BigInt
): CrossChainInteraction {
  let crossChainInteractionEvent = changetype<CrossChainInteraction>(
    newMockEvent()
  )

  crossChainInteractionEvent.parameters = new Array()

  crossChainInteractionEvent.parameters.push(
    new ethereum.EventParam(
      "originChain",
      ethereum.Value.fromUnsignedBigInt(originChain)
    )
  )
  crossChainInteractionEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  crossChainInteractionEvent.parameters.push(
    new ethereum.EventParam("fishId", ethereum.Value.fromUnsignedBigInt(fishId))
  )

  return crossChainInteractionEvent
}

export function createFishEatenEvent(
  player: Address,
  fishSize: BigInt,
  reward: BigInt
): FishEaten {
  let fishEatenEvent = changetype<FishEaten>(newMockEvent())

  fishEatenEvent.parameters = new Array()

  fishEatenEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  fishEatenEvent.parameters.push(
    new ethereum.EventParam(
      "fishSize",
      ethereum.Value.fromUnsignedBigInt(fishSize)
    )
  )
  fishEatenEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return fishEatenEvent
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

export function createPlayerGrownEvent(
  player: Address,
  newSize: BigInt
): PlayerGrown {
  let playerGrownEvent = changetype<PlayerGrown>(newMockEvent())

  playerGrownEvent.parameters = new Array()

  playerGrownEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  playerGrownEvent.parameters.push(
    new ethereum.EventParam(
      "newSize",
      ethereum.Value.fromUnsignedBigInt(newSize)
    )
  )

  return playerGrownEvent
}
