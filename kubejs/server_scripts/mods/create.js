ServerEvents.recipes(event => {
  event.remove({id: 'create:milling/sandstone'});
	event.recipes.createMilling([Item.of('minecraft:sand'), Item.of('thermal:sulfur').withChance(0.8)], 'minecraft:sandstone');

  event.recipes.createHaunting('minecraft:egg', 'create:dough');

	let alloysRecipes = [
		{ output: '#forge:dusts/steel', inputs: [Item.of('#forge:dusts/iron', 2), Item.of("forge:dusts/coal")]},
		{ output: '#forge:dusts/brass', inputs: [Item.of('#forge:dusts/copper'), '#forge:dusts/zinc']},
		{ output: '#forge:dusts/invar', inputs: [Item.of('#forge:dusts/iron', 2), '#forge:dusts/nickel']}
	];
	alloysRecipes.forEach(alloysRecipe => {	
		event.recipes.createMixing(Item.of(alloysRecipe.output), alloysRecipe.inputs).processingTime(60);
	});

	event.remove({id: 'createchromaticreturn:motor_recipe'});
	event.remove({id: 'createchromaticreturn:cf_to_gp'});
	event.remove({id: 'createchromaticreturn:gp_to_bp'});
	event.remove({id: 'createchromaticreturn:cf_to_gs'});
	event.remove({id: 'createchromaticreturn:refined_radiance_recipe'});
	event.remove({id: 'createchromaticreturn:refined_mixture_recipe'});
	event.remove({id: 'createchromaticreturn:chromatic_compound_recipe'});
	event.remove({id: 'createchromaticreturn:bedrock_shard_crushing'});

	event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'),
	[Fluid.of('minecraft:water'),Fluid.of('minecraft:lava')]).withCatalyst('supplementaries:flint_block').requiredBonks(4);
});