import {
  CrossChainInteraction as CrossChainInteractionEvent,
  FishEaten as FishEatenEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlayerGrown as PlayerGrownEvent
} from "../generated/Contract/Contract"
import {
  CrossChainInteraction,
  FishEaten,
  OwnershipTransferred,
  PlayerGrown
} from "../generated/schema"

export function handleCrossChainInteraction(
  event: CrossChainInteractionEvent
): void {
  let entity = new CrossChainInteraction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.originChain = event.params.originChain
  entity.player = event.params.player
  entity.fishId = event.params.fishId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFishEaten(event: FishEatenEvent): void {
  let entity = new FishEaten(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.fishSize = event.params.fishSize
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerGrown(event: PlayerGrownEvent): void {
  let entity = new PlayerGrown(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player = event.params.player
  entity.newSize = event.params.newSize

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
