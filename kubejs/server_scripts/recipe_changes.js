ServerEvents.recipes(event => {

  // Remove the existing recipe by output item.
  // Replace 'mod:item_id' with the item this recipe produces.
  event.remove({ output: 'redstonepen:control_box' })

  // Add the new shaped 3x3 recipe.
  event.shaped(
    // Output item (and optional count, e.g. Item.of('mod:item_id', 4))
    'redstonepen:control_box',

    // Pattern: each character maps to an ingredient below.
    // Use a space for an empty slot.
    [
      'ACA',
      'DBE',
      'AFA'
    ],

    // Key definitions — map each letter to an item or tag.
    // Tags use '#' prefix, e.g. '#forge:ingots/iron'
    {
      A: 'minecraft:quartz',
      B: 'redstonepen:quill',
      C: 'create:polished_rose_quartz',
      D: 'minecraft:emerald',
      E: 'minecraft:lapis_lazuli',
      F: 'create_new_age:overcharged_gold'
    }
  )

  // -----------------------------------------------------------------------

  event.remove({ output: 'computercraft:monitor_normal' })

  event.shaped(
    'computercraft:monitor_normal',
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:stone',
      B: 'create:nixie_tube'
    }
  )

event.remove({ output: 'computercraft:monitor_advanced' })

event.shaped(
  Item.of('computercraft:monitor_advanced', 4),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'create:nixie_tube'
  }
)

event.remove({ output: 'advancedperipherals:peripheral_casing' })

event.shaped(
  'advancedperipherals:peripheral_casing',
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'createcasing:creative_casing',
    B: 'create:andesite_bars',
    C: 'create:precision_mechanism',
  }
)

event.remove({ output: 'computercraft:computer_normal' })

event.recipes.createMechanicalCrafting('computercraft:computer_normal', [
  'CCCCC',
  'CAPAC',
  'CPDPC',
  'CAPAC',
  'CNNNC'
], {
  A: 'createaddition:capacitor',
  C: 'createcasing:creative_casing',
  D: 'create_new_age:overcharged_diamond',
  N: 'create:nixie_tube',
  P: 'create:precision_mechanism',
})

// Remove only the advanced computer recipe, not the upgrade
event.remove({ id: 'computercraft:computer_advanced' })

event.remove({ output: 'computercraft:pocket_computer_normal' })

event.recipes.createMechanicalCrafting('computercraft:pocket_computer_normal', [
  'CCCCC',
  'CAPAC',
  'CPEPC',
  'CAPAC',
  'CNNNC'
], {
  A: 'createaddition:capacitor',
  C: 'createcasing:creative_casing',
  E: 'minecraft:enchanted_golden_apple',
  N: 'create:nixie_tube',
  P: 'create:precision_mechanism',
})

event.remove({ id: 'computercraft:pocket_computer_advanced' })

})