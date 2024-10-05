import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CrossChainInteraction } from "../generated/schema"
import { CrossChainInteraction as CrossChainInteractionEvent } from "../generated/Contract/Contract"
import { handleCrossChainInteraction } from "../src/contract"
import { createCrossChainInteractionEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let originChain = BigInt.fromI32(234)
    let player = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fishId = BigInt.fromI32(234)
    let newCrossChainInteractionEvent = createCrossChainInteractionEvent(
      originChain,
      player,
      fishId
    )
    handleCrossChainInteraction(newCrossChainInteractionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CrossChainInteraction created and stored", () => {
    assert.entityCount("CrossChainInteraction", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CrossChainInteraction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "originChain",
      "234"
    )
    assert.fieldEquals(
      "CrossChainInteraction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CrossChainInteraction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fishId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
