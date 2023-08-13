class Model {
    constructor() {
        this.meals = [{
                id: 1,
                name: "Cumin Salmon",
                ingredients: [
                    { ing: "Salmon fillets", quant: 2 },
                    { ing: "Soy Sauce (tbsp)", quant: 3 },
                    { ing: "Cumin (tsp)", quant: 1 },
                    { ing: "Chilli Flakes (tsp)", quant: 2 },
                    { ing: "Spring Onion", quant: 4 },
                    { ing: "Noodles (pack)", quant: 1 },
                    { ing: "Courgette", quant: 1 },
                    { ing: "Bell Pepper", quant: 2 },
                ],
                img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                blurb: "Healthy, satisfying, and super quick to make",
                recipe: "https://www.myrecipes.com/recipe/cumin-dusted-salmon-fillets",
                tags: ["All", "Seafood"]
            },
            {
                id: 2,
                name: "Easy Pizza",
                ingredients: [
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Salami (pack)", quant: 1 },
                    { ing: "Mozzarella Cheese (pack)", quant: 1 },
                    { ing: "Passata (Jar)", quant: 1 },
                    { ing: "Dried Yeast (7g pack)", quant: 1 },
                    { ing: "Caster Sugar (tsp)", quant: 1 },
                    { ing: "Flour (g)", quant: 400 },
                ],
                img: "https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg",
                blurb: "Dough is surprisingly easy to make. Switch out the toppings with your favourites and make sure the oven is at the hottest setting you can get it when baking (or use a pizza oven)",
                recipe: "https://www.sainsburysmagazine.co.uk/recipes/bread/quick-pizza-dough",
                tags: ["All", "Italian"]
            },
            {
                id: 3,
                name: "Lasagne",
                ingredients: [
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Carrot", quant: 1 },
                    { ing: "Garlic (cloves)", quant: 3 },
                    { ing: "Passata (Jar)", quant: 1 },
                    { ing: "Beef Mince (g)", quant: 500 },
                    { ing: "Pork Mince (g)", quant: 500 },
                    { ing: "Milk (ml)", quant: 200 },
                    { ing: "Chopped Tomatoes (cans)", quant: 2 },
                    { ing: "Beef Stock (cubes)", quant: 2 },
                    { ing: "Red wine (ml)", quant: 500 },
                    { ing: "Nutmeg (tsp)", quant: 2 },
                    { ing: "Cheddar Cheese (pack)", quant: 0.5 },
                    { ing: "Lasagne Sheets (pack)", quant: 1 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/classic-lasange-4a66137.jpg?quality=90&webp=true&resize=440,400",
                blurb: "Classic comfort food. Takes a while to cook so if you're doing it mid-week, start early!",
                recipe: "https://www.bbcgoodfood.com/recipes/lasagne",
                tags: ["All", "Italian"]
            },
            {
                id: 4,
                name: "Quorn Stir Fry",
                ingredients: [
                    { ing: "Bell Pepper", quant: 2 },
                    { ing: "Quorn Pieces (g)", quant: 300},
                    { ing: "Soy Sauce (tbsp)", quant: 3 },
                    { ing: "Courgette", quant: 1 },
                    { ing: "Noodles (pack)", quant: 3 },
                    { ing: "Brocolli (whole)", quant: 1 },
                ],
                img: "https://www.wellplated.com/wp-content/uploads/2019/07/Ginger-Teriyaki-Chicken-Stir-Fry.jpg",
                blurb: "Quick and easy mid-week meal with loads of flavour. The veg prep is so simple you don't need to buy pre-packed",
                recipe: "https://www.bbc.co.uk/food/recipes/how_to_make_chicken_stir_01397",
                tags: ["All", "Asia/Thai"]
            },
            {
                id: 5,
                name: "Stuffed Peps",
                ingredients: [
                    { ing: "Bell Pepper", quant: 4 },
                    { ing: "Quorn mince (g)", quant: 350 },
                    { ing: "Cream cheese (g)", quant: 180 },
                    { ing: "Cayenne Pepper (tsp)", quant: 3 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Mixed Salad (bag)", quant: 1 },
                ],
                img: "https://images-gmi-pmc.edge-generalmills.com/3512d6fb-41d3-41e7-a66d-f234a5942b6a.jpg",
                blurb: "Surprisingly filling on their own, but add a garlic bread or cook some rice if you're starving",
                recipe: "https://www.quorn.co.uk/recipes/mince-stuffed-peppers",
                tags: ["All", "Mexican", "Veggie"]
            },
            {
                id: 6,
                name: "Prawn and Tomato Linguine",
                ingredients: [
                    { ing: "King Prawns (pack)", quant: 1 },
                    { ing: "Sundried Tomatoes (jar)", quant: 0.5 },
                    { ing: "Linguine Pasta (pack)", quant: 0.5 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Spinach (pack)", quant: 0.5 },
                    { ing: "Chilli Flakes (tsp)", quant: 2 },
                ],
                img: "https://img.taste.com.au/00ptu0Py/taste/2016/11/linguine-with-prawns-chilli-garlic-rocket-95151-1.jpeg",
                blurb: "Light and tasty with minimal prep",
                recipe: "https://www.bbc.co.uk/food/recipes/how_to_make_chicken_stir_01397",
                tags: ["All", "Italian", "Seafood"]
            },
            {
                id: 7,
                name: "Quorn Pasta Bake",
                ingredients: [
                    { ing: "White Onion", quant: 1 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                    { ing: "Chopped Tomatoes (cans)", quant: 2 },
                    { ing: "Caster Sugar (tsp)", quant: 1 },
                    { ing: "Marscapone (tbsp)", quant: 6 },
                    { ing: "Quorn Pieces (g)", quant: 500 },
                    { ing: "Fusilli Pasta (pack)", quant: 1 },
                    { ing: "Cheddar Cheese (pack)", quant: 1 },
                    { ing: "Mozzarella Cheese (pack)", quant: 1 },
                    { ing: "Parsley (bunch)", quant: 0.5 },
                ],
                img: "https://www.kitchensanctuary.com/wp-content/uploads/2017/01/Pasta-bake-with-chicken-and-bacon-square-FS.jpg",
                blurb: "Cooking a simple homemade sauce makes this a very satisfying batch bake that makes 5-6 meals",
                recipe: "https://www.bbcgoodfood.com/recipes/chicken-pasta-bake",
                tags: ["All", "Italian", "Veggie"]
            },
            {
                id: 8,
                name: "Leek and Mustard Pasta",
                ingredients: [
                    { ing: "Leeks", quant: 2 },
                    { ing: "Peas (g)", quant: 200 },
                    { ing: "Penne Pasta (pack)", quant: 1 },
                    { ing: "Mustard (tbsp)", quant: 1 },
                    { ing: "Double Cream (ml)", quant: 200 },
                    { ing: "Cheddar Cheese (pack)", quant: 1 },
                ],
                img: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/888194-1-eng-GB_chicken-tagliatelle.jpg",
                blurb: "Comfort food at it's best. Make the cheese blue for a tangier taste and double the mustard if you want it spicier",
                recipe: "https://www.bbcgoodfood.com/recipes/cheesy-leek-spinach-pasta",
                tags: ["All", "Italian", "Veggie"]
            },
            {
                id: 9,
                name: "Baby sweetcorn and mange tout laksa",
                ingredients: [
                    { ing: "Coconut Oil (tbsp)", quant: 0.5 },
                    { ing: "Thai Curry Paste (jar)", quant: 0.5},
                    { ing: "Ginger (g)", quant: 10 },
                    { ing: "Coconut Milk (cans)", quant: 2 },
                    { ing: "Vegetable Stock (cubes)", quant: 2 },
                    { ing: "Mange Tout (pack)", quant: 1 },
                    { ing: "Baby Sweetcorn (pack)", quant: 1 },
                    { ing: "Noodles (pack)", quant: 2 },
                    { ing: "Lime", quant: 1 },
                    { ing: "Cashews (tbsp)", quant: 2 },
                ],
                img: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/chicken-laksa-da2bbb32.jpg",
                blurb: "Healthy and hearty Thai soup",
                recipe: "https://www.amazon.co.uk/Veggie-Lean-15-15-minute-Workouts/dp/1509856153/ref=asc_df_1509856153/?tag=googshopuk-21&linkCode=df0&hvadid=310762441626&hvpos=&hvnetw=g&hvrand=7194131736094288006&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045954&hvtargid=pla-574976880190&psc=1&th=1&psc=1",
                tags: ["All", "Asia/Thai"]
            },
            {
                id: 10,
                name: "Courgette caponata pasta",
                ingredients: [
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Bell Pepper", quant: 2 },
                    { ing: "Courgette", quant: 3 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                    { ing: "Lemon (whole)", quant: 1 },
                    { ing: "Cinnamon (tsp)", quant: 0.25 },
                    { ing: "Chopped Tomatoes (cans) ", quant: 1 },
                    { ing: "Red wine vinegar (tbsp)", quant: 1 },
                    { ing: "Honey (tsp)", quant: 1 },
                    { ing: "Capers (tbsp)", quant: 2 },
                    { ing: "Conchiglie (pack)", quant: 1 },
                ],
                img: "https://www.hairybikers.com/uploads/images/_recipeImage/COURGETTE_CAPONATA.jpg",
                blurb: "Caponata is a punchy vegetable dish that can be eaten on its own but it’s also great with pasta",
                recipe: "https://www.hairybikers.com/recipes/view/courgette-caponata-pasta",
                tags: ["All", "Italian", "Veggie"]
            },
            {
                id: 11,
                name: "Fajitas",
                ingredients: [
                    { ing: "Quorn Chicken Slices (pack)", quant: 1 },
                    { ing: "Salsa (jar)", quant: 1 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                    { ing: "Mushroom (whole)", quant: 5 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Bell Pepper", quant: 2 },
                    { ing: "Lime (whole)", quant: 1 },
                    { ing: "Mozzarella Cheese (pack)", quant: 1 },
                    { ing: "Wraps (pack)", quant: 0.5 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-fajitas-2-d7172f8.jpg?quality=90&webp=true&resize=440,400",
                blurb: "Easy to make and size up the servings for a casual dinner party. Makes 4 generous-size Fajitas or use the filling to make 2 large quesadillas",
                recipe: "https://www.bbcgoodfood.com/recipes/easy-chicken-fajitas",
                tags: ["All", "Mexican"]
            },
            {
                id: 12,
                name: "Veggie Enchiladas",
                ingredients: [
                    { ing: "Sweet Potatoes (whole)", quant: 2 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Tomato Puree (tbsp)", quant: 2 },
                    { ing: "Black Beans (cans)", quant: 1 },
                    { ing: "Wraps (pack)", quant: 1 },
                    { ing: "Cheddar Cheese (pack)", quant: 1 },
                ],
                img: "https://cookieandkate.com/images/2016/04/vegetarian-enchiladas-recipe.jpg",
                blurb: "Filling, hearty and makes good freezer food. Add some cayenne pepper to crank up the heat",
                recipe: "https://www.amazon.co.uk/Thug-Kitchen-Eat-Like-Give/dp/0751555517#ace-g0979249316",
                tags: ["All", "Veggie", "Mexican"]
            },
            {
                id: 13,
                name: "Quorn tikka masala",
                ingredients: [
                    { ing: "Quorn Pieces (g)", quant: 500 },
                    { ing: "Ginger (g)", quant: 50 },
                    { ing: "Garlic (cloves)", quant: 6 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Tikka paste (jar)", quant: 3 },
                    { ing: "Chopped Tomatoes (cans) ", quant: 1 },
                    { ing: "Greek Yoghurt (g)", quant: 100 },
                    { ing: "Ground Almonds (g)", quant: 50 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chicken-curry-aa22a0b.jpg?quality=90&webp=true&resize=440,400",
                blurb: "Simple tikka curry with a homemade sauce that makes it feel more satisying than using sauce from a jar. Serve with rice, poppadums, naan etc",
                recipe: "https://www.bbcgoodfood.com/recipes/easy-chicken-curry",
                tags: ["All", "Veggie", "Indian"]
            },
            {
                id: 14,
                name: "Thai Green Curry",
                ingredients: [
                    { ing: "Quorn Pieces (g)", quant: 500 },
                    { ing: "Shallots (whole)", quant: 2 },
                    { ing: "New Potatoes (g)", quant: 225 },
                    { ing: "Lemongrass (whole)", quant: 1 },
                    { ing: "Thai Curry Paste (jar)", quant: 1 },
                    { ing: "Fish Sauce (tbsp)", quant: 2 },
                    { ing: "Brown Sugar (tsp)", quant: 1 },
                    { ing: "Kaffir Lime Leaf", quant: 4 },
                    { ing: "Coconut Milk (cans)", quant: 1 },
                    { ing: "Baby Sweetcorn (pack)", quant: 1 },
                    { ing: "Green Beans (pack)", quant: 1 },
                ],
                img: "https://properfoodie.com/wp-content/uploads/2018/05/square-Thai-green-curry-12.jpg",
                blurb: "Seriously good thai curry. Great for a quick mid-week dinner",
                recipe: "https://www.bbcgoodfood.com/recipes/thai-green-chicken-curry",
                tags: ["All", "Veggie", "Asia/Thai"]
            },
            {
                id: 15,
                name: "Carbonara",
                ingredients: [
                    { ing: "Pecorino Cheese (g)", quant: 50 },
                    { ing: "Parmesan Cheese (g)", quant: 50 },
                    { ing: "Eggs (whole)", quant: 3 },
                    { ing: "Spaghetti (g)", quant: 350 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Butter (g)", quant: 50 },
                    { ing: "Mushroom (whole)", quant: 5 },
                ],
                img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg",
                blurb: "Italian classic and pretty simple but might take a few practices. When adding the egg, take the pasta off the heat and make it isn't too hot else the eggs will scramble.",
                recipe: "https://www.bbcgoodfood.com/recipes/ultimate-spaghetti-carbonara-recipe",
                tags: ["All", "Veggie", "Italian"]
            },
            {
                id: 16,
                name: "Potato Pakora Burgers",
                ingredients: [
                    { ing: "White Potato (g)", quant: 480 },
                    { ing: "Turmeric (tsp)", quant: 1.5 },
                    { ing: "Spring Onion", quant: 6 },
                    { ing: "Chilli Pepper (whole)", quant: 1 },
                    { ing: "Ginger (g)", quant: 2.5 },
                    { ing: "Butter (g)", quant: 1.5 },
                    { ing: "Flour (g)", quant: 80 },
                    { ing: "Milk (ml)", quant: 2 },
                    { ing: "Naan Bread", quant: 2 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Mango Chutney (jar)", quant: 0.5 },
                ],
                img: "https://foodlovermagazine.com/wp-content/uploads/2018/08/Part-time-veg-day-4-Potato-pakora-burger053.jpg",
                blurb: "A hidden treasure. Big on carbs and big on flavour. Recipe is in a brilliant book that you can buy via the recipe link",
                recipe: "https://www.amazon.co.uk/Part-Time-Vegetarian-Flexible-Recipes-Meaty-Free/dp/1848992653/ref=sr_1_1?adgrpid=53656411659&dchild=1&gclid=CjwKCAjwn9v7BRBqEiwAbq1Ey9heZC0bU2Al5JgugQCyvGWfgvSO3R9tT0-jNE7IWCPvNIq7qrD5QxoCL9IQAvD_BwE&hvadid=259084246702&hvdev=c&hvlocphy=9045954&hvnetw=g&hvqmt=e&hvrand=5979940138223550657&hvtargid=kwd-301211519196&hydadcr=12331_1769745&keywords=the+part+time+vegetarian&qid=1601633964&sr=8-1&tag=googhydr-21",
                tags: ["All", "Veggie", "Indian"]
            },
            {
                id: 17,
                name: "Pad Thai",
                ingredients: [
                    { ing: "Noodles (pack)", quant: 2 },
                    { ing: "Lime", quant: 2 },
                    { ing: "Brown Sugar (tsp)", quant: 1 },
                    { ing: "Chilli Flakes (tsp) ", quant: 1 },
                    { ing: "King Prawns (pack)", quant: 1 },
                    { ing: "Spring Onion", quant: 2 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Mange Tout (pack)", quant: 1 },
                    { ing: "Egg", quant: 2 },
                    { ing: "Peanuts (g)", quant: 50 },
                    { ing: "Fish Sauce (tbsp)", quant: 3 },
                    { ing: "Sweet Chilli Sauce (tbsp)", quant: 4 },
                ],
                img: "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/04/pad-thai.jpg",
                blurb: "A takeaway classic for a fraction of the price",
                recipe: "https://www.bbcgoodfoodme.com/recipes/next-level-pad-thai/",
                tags: ["All", "Seafood", "Asia/Thai"]
            },
            {
                id: 18,
                name: "Med Puff Pastry Tart",
                ingredients: [
                    { ing: "Puff Pastry (block)", quant: 1 },
                    { ing: "Red Onion ", quant: 1 },
                    { ing: "Courgette", quant: 1 },
                    { ing: "Bell Pepper", quant: 2 },
                    { ing: "Garlic (cloves) ", quant: 2 },
                    { ing: "Cherry Tomato (whole)", quant: 8 },
                    { ing: "Ricotta (tbsp)", quant: 4 },
                    { ing: "Lemon (whole)", quant: 1 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                ],
                img: "https://hips.hearstapps.com/prima.cdnds.net/assets/15/29/1436805185-vegetable-tart.jpg",
                blurb: "Great after a hot summer day, really fresh and serves 3 people a good portion. Serve with side salad tossed in a med style vinigarette",
                recipe: "https://www.amazon.co.uk/Veggie-Lean-15-15-minute-Workouts/dp/1509856153/ref=sr_1_4?adgrpid=103983390677&dchild=1&gclid=CjwKCAjwn9v7BRBqEiwAbq1Ey7Djyhu9p2YYq0-eqchgcNd-Z3L1bmPBhMx5tjSY_8CvPzm20wsH9RoCPo4QAvD_BwE&hvadid=447551627944&hvdev=c&hvlocphy=9045954&hvnetw=g&hvqmt=b&hvrand=15369835087494978765&hvtargid=kwd-305718308815&hydadcr=12302_1769379&keywords=lean+15+cookbook&qid=1601634087&s=books&sr=1-4&tag=googhydr-21",
                tags: ["All", "Veggie", "Spanish"]
            },
            {
                id: 19,
                name: "Satay Noodle Soup",
                ingredients: [
                    { ing: "Quorn Chicken Slices (pack)", quant: 1 },
                    { ing: "Ginger (g)", quant: 10 },
                    { ing: "Garlic (cloves)", quant: 3 },
                    { ing: "Chicken Stock (cubes)", quant: 1 },
                    { ing: "Coconut Milk (cans)", quant: 2 },
                    { ing: "Chilli Pepper (whole)", quant: 2 },
                    { ing: "Soy Sauce (tbsp)", quant: 3 },
                    { ing: "Peanut Butter (tbsp)", quant: 3 },
                    { ing: "Lime", quant: 2 },
                    { ing: "Brown Sugar (tsp)", quant: 3 },
                    { ing: "Fish Sauce (tbsp)", quant: 1 },
                    { ing: "Noodles (pack)", quant: 3 },
                    { ing: "Spring Onion", quant: 4 },
                    { ing: "Beanspout (pack)", quant: 1 },
                    { ing: "Peanuts (grams)", quant: 50 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-noodle-bowl-311c60e.jpg?quality=90&webp=true&resize=440,400",
                blurb: "A sort of Thai style ramen. Seriously delicious and hard to have only one bowl. Makes 4 bowls if you can resist seconds.",
                recipe: "https://www.bbcgoodfood.com/recipes/satay-noodle-soup",
                tags: ["All", "Veggie", "Asia/Thai"]
            },
            {
                id: 20,
                name: "Trout and Samphire Linguini",
                ingredients: [
                    { ing: "Trout fillets", quant: 2 },
                    { ing: "Linguine Pasta (pack)", quant: 0.5 },
                    { ing: "Cayenne Pepper (tsp)", quant: 1 },
                    { ing: "Samphire (g)", quant: 85 },
                    { ing: "Butter (g)", quant: 25 },
                    { ing: "King Prawns (pack)", quant: 1 },
                    { ing: "Tarragon (tsp)", quant: 1 },
                    { ingredient: "Lemon (whole)", quantity: 1 },
                    { ing: "Shallots (pack)", quant: 0.5 },
                    { ing: "White Wine (ml)", quant: 60 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1284537_7-ce34894.jpg?quality=90&webp=true&resize=440,400",
                blurb: "Decadent but light, we switched the potato with pasta but have it with whatever you fancy",
                recipe: "https://www.bbcgoodfood.com/recipes/sea-trout-samphire-potted-shrimp-Lemon",
                tags: ["All", "Seafood"]
            },
            {
                id: 21,
                name: "Lemon veg and mozzarella roast",
                ingredients: [
                    { ing: "Lemon (whole)", quant: 1 },
                    { ing: "Turmeric (tsp)", quant: 1 },
                    { ing: "Chilli Flakes (tsp)", quant: 1},
                    { ing: "White Potato (g)", quant: 800 },
                    { ing: "White Onion", quant: 2 },
                    { ing: "Cherry Tomato (whole)", quant: 15},
                    { ing: "Fresh mozzarella (pack)", quant: 2 },
                    { ing: "Pumpkin seeds (tbsp)", quant: 4 },
                    { ing: "Capers (tbsp)", quant: 2 },

                ],
                img: "https://images.ckbk.com/eyJrZXkiOiJpbWFnZXMvcGFydDkyNjU4YzAzczAwMXIwMDhnMDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjQsImhlaWdodCI6NzY4LCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiZW50cm9weSJ9fX0=",
                blurb: "Everything mixed together and put in the oven. simple and satisfying",
                recipe: "https://www.amazon.co.uk/Part-Time-Vegetarian-Flexible-Recipes-Meat-Free/dp/1848992653",
                tags: ["All", "Veggie", "Italian"]
            },
            {
                id: 22,
                name: "Pan-fried chimichurri gnocchi with steak",
                ingredients: [
                    { ing: "Cherry Tomato (whole)", quant: 5 },
                    { ing: "Gnocchi (pack)", quant: 1 },
                    { ing: "Parsley (bunch)", quant: 1 },
                    { ing: "Oregano (bunch)", quant: 0.5 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Chilli Pepper (whole)", quant: 2 },
                    { ing: "Lemon (whole)", quant: 1 },
                    { ing: "White wine vinegar (tbsp)", quant: 1 },
                    { ing: "Sirloin steak", quant: 2 },

                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-with-herb-sauce-7863963.jpg?resize=960,872?quality=90&webp=true&resize=556,505",
                blurb: "Fragrant, fiery and speedy meal",
                recipe: "https://www.amazon.co.uk/Part-Time-Vegetarian-Flexible-Recipes-Meat-Free/dp/1848992653",
                tags: ["All", "Spanish"]
            },
            {
                id: 23,
                name: "Homemade Tacos",
                ingredients: [
                    { ing: "White Onion", quant: 1 },
                    { ing: "Bacon (rashers)", quant: 2 },
                    { ing: "Beef Mince (g)", quant: 500 },
                    { ing: "Bell Pepper", quant: 1 },
                    { ing: "Avocado", quant: 1 },
                    { ing: "Lime", quant: 2 },
                    { ing: "Tomato", quant: 1 },
                    { ing: "Garlic (cloves)", quant: 1 },
                    { ing: "Chilli Pepper (whole)", quant: 1 },
                    { ing: "Flour (g)", quant: 136 },
                    { ing: "Manchego (g)", quant: 100 },
                ],
                img: "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg",
                blurb: "Homemade soft shell tacos and salsa makes this one of our absolute favourite recipes",
                recipe: "https://www.thewholesomedish.com/the-best-homemade-tacos/",
                tags: ["All", "Mexican"]
            },
            {
                id: 24,
                name: "Peppered duck with mash and ragout",
                ingredients: [
                    { ing: "Duck breast", quant: 2 },
                    { ing: "Lardons (pack)", quant: 1 },
                    { ing: "Wild mushrooms (pack)", quant: 1 },
                    { ing: "Port (tbsp)", quant: 2 },
                    { ing: "Peas (g)", quant: 100},
                    { ing: "Chicken Stock (cubes)", quant: 1 },
                    { ing: "White Potato (g)", quant: 500 },
                    { ing: "Double Cream (ml)", quant: 30 },
                    { ing: "Vanilla pod (pods)", quant: 2 },
                    { ing: "Butter (g)", quant: 25 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-967562_11-7f56329.jpg?resize=960,872?quality=90&webp=true&resize=600,545",
                blurb: "A bistro-style dish of rare duck with Marsala jus, creamy mashed potatoes and sweet peas",
                recipe: "https://www.bbcgoodfood.com/recipes/peppered-duck-vanilla-mash-pea-wild-mushroom-ragout",
                tags: ["All", "British"]
            },
            {
                id: 25,
                name: "Thai Cups",
                ingredients: [
                    { ing: "Sesame Oil (tbsp)", quant: 1 },
                    { ing: "Pork Mince (grams)", quant: 500 },
                    { ing: "Thai Curry Paste (jar)", quant: 1 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Lime", quant: 1 },
                    { ing: "Gem Lettuce (whole)", quant: 4 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-green-pork-lettuce-cups-f3165ca.jpg?quality=90&webp=true&resize=440,400",
                blurb: "Delicious, healthy, easy. Switch pork for quorn, it's just as tasty",
                recipe: "https://www.bbcgoodfood.com/recipes/thai-green-pork-lettuce-cups",
                tags: ["All", "Veggie", "Asia/Thai"]
            },
            {
                id: 26,
                name: "Pasta Primavera",
                ingredients: [
                    { ing: "Butter (g)", quant: 50 },
                    { ing: "Garlic (cloves)", quant: 1 },
                    { ing: "Asparagus (g)", quant: 200 },
                    { ing: "Peas (g)", quant: 150 },
                    { ing: "Edamame Beans (g)", quant: 100 },
                    { ing: "Spinach (pack)", quant: 0.5 },
                    { ing: "Tagliatelle (g)", quant: 400 },
                    { ing: "Lemon (whole)", quant: 1 },
                    { ing: "Mixed herbs (tsp)", quant: 2 },
                    { ing: "Parmesan Cheese (g)", quant: 20 },
                ],
                img: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/pastaprimavera_86310_16x9.jpg",
                blurb: "Healthy pasta brimming with spring vegetables and very quick to make",
                recipe: "https://www.bbc.co.uk/food/recipes/pastaprimavera_86310",
                tags: ["All", "Veggie", "Italian"]
            },
            {
                id: 27,
                name: "Jackfruit Burgers",
                ingredients: [
                    { ing: "Jackfruit (g)", quant: 400 },
                    { ing: "Jerk marinade (tbsp)", quant: 5 },
                    { ing: "Red Cabbage", quant: 0.25 },
                    { ing: "Carrot", quant: 1 },
                    { ing: "Spring Onion", quant: 2 },
                    { ing: "Mayonnaise (tbsp)", quant: 5 },
                    { ing: "Bread buns", quant: 6 },
                    { ing: "Lime", quant: 1 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/2/2018/02/BBQ_Jackfruit_Buns-6875a57.jpg?webp=true&quality=45&crop=6px%2C1960px%2C3322px%2C1429px&resize=1880%2C799",
                blurb: "Jackfruit is a great vegan alternative to pork and this spicy little number makes 5-6 burgers",
                recipe: "https://www.olivemagazine.com/recipes/vegan/bbq-jackfruit-buns-with-apple-slaw/",
                tags: ["All", "Veggie"]
            },
            {
                id: 28,
                name: "Halloumi Wraps",
                ingredients: [
                    { ing: "Halloumi (block)", quant: 2 },
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Salsa (jar)", quant: 1 },
                    { ing: "Chilli Flakes (tsp)", quant: 1 },
                    { ing: "Mushroom (whole)", quant: 5 },
                    { ing: "Garlic (cloves)", quant: 2 },
                    { ing: "Bell Pepper", quant: 2 },
                    { ing: "Lime (whole)", quant: 1 },
                    { ing: "Wraps (pack)", quant: 0.5 },
                    { ing: "Avocado", quant: 1 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/halloumi-fajitas-ac81223.jpg?quality=90&webp=true&resize=300,272",
                blurb: "Halloumi tortilla wraps with avocado for a quick and easy after work dinner",
                recipe: "https://www.bbcgoodfood.com/recipes/halloumi-fajitas",
                tags: ["All", "Veggie", "Mexican"]
            },
            {
                id: 29,
                name: "Veggie Yaki Udon",
                ingredients: [
                    { ing: "Red Onion", quant: 1 },
                    { ing: "Mange Tout (pack)", quant: 1 },
                    { ing: "Baby Sweetcorn (pack)", quant: 1 },
                    { ing: "Pak Choi (whole)", quant: 2 },
                    { ing: "Spring Onion", quant: 3 },
                    { ing: "Garlic (cloves)", quant: 1 },
                    { ing: "Curry Powder (tbsp)", quant: 0.5 },
                    { ing: "Udon Noodles (pack)", quant: 1 },
                    { ing: "Sushi Ginger (tbsp)", quant: 1 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yaki-udon-19d4efb.jpg?quality=90&webp=true&resize=300,272",
                blurb: "Pack in the veg with this flavour-packed Japanese-inspired yaki udon",
                recipe: "https://www.bbcgoodfood.com/recipes/veggie-yaki-udon",
                tags: ["All", "Veggie", "Asia/Thai"]
            },
            {
                id: 30,
                name: "Veggie Ramen",
                ingredients: [
                    { ing: "Ginger (g)", quant: 5 },
                    { ing: "Spring Onion", quant: 4 },
                    { ing: "Garlic (cloves)", quant: 1 },
                    { ing: "Rice wine vinegar (tbsp)", quant: 2 },
                    { ing: "Vegetable Stock (cubes)", quant: 2 },
                    { ing: "Shiitake Mushrooms (pack)", quant: 1 },
                    { ing: "Eggs (whole)", quant: 2 },
                    { ing: "Spinach (pack)", quant: 0.5 },
                    { ing: "Udon Noodles (pack)", quant: 1 },
                    { ing: "Carrot", quant: 1 },
                ],
                img: "https://www.aheadofthyme.com/wp-content/uploads/2017/01/quick-and-easy-vegetarian-ramen-11-1024x683.jpg",
                blurb: "Quick and easy vegetarian ramen",
                recipe: "https://www.aheadofthyme.com/2017/01/quick-and-easy-vegetarian-ramen/",
                tags: ["All", "Veggie", "Asia/Thai"]
            },
            {
                id: 31,
                name: "Chicken Casserole",
                ingredients: [
                    { ing: "Chicken breast (whole)", quant: 6 },
                    { ing: "White Onion", quant: 1 },
                    { ing: "Carrot", quant: 5 },
                    { ing: "New Potatoes (g)", quant: 300 },
                    { ing: "Celery (sticks)", quant: 2 },  
                    { ing: "Chicken gravy granules (pack)", quant: 1 },
                    { ing: "Mushroom (whole)", quant: 10 },
                    { ing: "Chicken Stock (cubes)", quant: 2 },
                ],
                img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/slow-cooker-chicken-casserole-1172edc.jpg?quality=90&webp=true&resize=300,272",
                blurb: "Wholesome chicken casserole that delivers comfort while being low-fat",
                recipe: "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-casserole",
                tags: ["All", "British"]
            },
        ]

        this.curList = [];
    }

    addMeal(mealID) {
        for (let m of this.meals) {
            if (m.id === mealID) {
                this.curList.push(m)
            }
        }
    }

    deleteMeal(mealID) {
        for (let m of this.meals) {
            if (m.id === mealID) {
                let index = this.curList.indexOf(m)
                if (index > -1) {
                    this.curList.splice(index, 1)
                }
            }
        }
    }
}


class View {
    constructor() {
        this.mealList = this.getElement('#recipe-card-container'),
            this.curMealList = this.getElement('.current-meals'),
            this.curIngList = this.getElement('.shopping-list'),
            this.shopListWrap = this.getElement('#shopping-list-aside'),
            this.searchForm = this.getElement('.search-form'),
            this.searchInput = this.getElement('#search-input'),
            this.cuisBtns = this.getNodeList('.cuisine-item'),
            this.closeMenu = this.getElement('.close-menu'),
            this.mealCount = this.getElement('.meal-count'),
            this.randMeal = this.getElement('#featured-meal'),
            this.mainSec = this.getElement('#main-section')
    }

    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }

    getNodeList(selector) {
        const element = document.querySelectorAll(selector)
        return element
    }

    bindDeleteIng() {
        this.curIngList.addEventListener("click", e => {
            if (e.target.classList.contains('delete-ing')) {
                let ing = e.target.parentElement
                ing.remove()
            }
        })
    }



    displayMeals(meals) {
        for (let m of meals) {
            let mealLine = `

            <div class="col-sm-12 col-md-6">
                        <div class="card" id="${m.id}">
                            <img src= "${m.img}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body ">
                                <h5 class="card-title">${m.name}</h5>
                                <p class="card-text ">${m.blurb}.</p>
                            </div>
                            <div class="card-links">
                                <a href="${m.recipe}" class="btn btn-primary ">Recipe</a>
                                <span class="btn btn-primary add-meal ">Add meal</span>
                            </div>
                        </div>
                    </div>

            `
            this.mealList.insertAdjacentHTML('beforeend', mealLine)
        }
    }

    featuredMeal(meal) {
        function generateRandom(maxLimit = 100) {
            let rand = Math.random() * maxLimit;

            rand = parseInt(Math.floor(rand));

            return rand;
        }

        let randId = generateRandom(27);

        for (let m of meal) {
            if (m.id == randId) {
                let featMeal = `
                <div class="col-sm-12 col-md-6">
                            <div class="card" id="${m.id}">
                                <img src= "${m.img}" class="card-img-top img-fluid" alt="...">
                                <div class="card-body ">
                                    <h5 class="card-title ">${m.name}</h5>
                                    <p class="card-text ">${m.blurb}.</p>
                                </div>
                                <div class="card-links">
                                    <a href="${m.recipe}" class="btn btn-primary ">Recipe</a>
                                    <span class="btn btn-primary add-meal ">Add meal</span>
                                </div>
                            </div>
                        </div>
    
                `
                this.randMeal.insertAdjacentHTML('beforeend', featMeal)

            }
        }
    }

    autoComplete(meals) {
        let mealNames = {
            data: [],
            list: {
                match: {
                    enabled: true,
                },
            },
        };

        for (let m of meals) {
            mealNames.data.push(m.name);
        }

        $("#search-input").easyAutocomplete(mealNames);
    }

    renderCurMeals(curMeals) {
        this.curMealList.innerHTML = " ";
        this.curIngList.innerHTML = " ";
        let ingList = [];

        for (let m of curMeals) {
            let mealLine = `
            <div class="meal-line" id="${m.id}" >
            <h5 class="semibold-heading">${m.name}</h5>
            <i class="fas fa-trash delete-meal"></i>
        </div> 
            `
            this.curMealList.insertAdjacentHTML('beforeend', mealLine)

            for (let ing of m.ingredients) {
                ingList.push(ing)
            }

        }

        let counts = ingList.reduce((prev, cur) => {
            let count = prev.get(cur.ing) || 0;
            prev.set(`${cur.ing}`, cur.quant + count);
            return prev;
        }, new Map());

        let reducedCurrentIngList = [...counts].map(([ing, quant]) => {
            return { ing, quant };
        });

        ingList.splice(0, ingList.length, ...reducedCurrentIngList);

        ingList.forEach((ing) => {
            let newIngGroup = `

            <div class="ing-line">
            <p>${ing.ing}: ${ing.quant}</p>
            <i class="fas fa-trash delete-ing"></i>
        </div>
        `;

            // Add each ingredient group into the shopping list container
            this.curIngList.insertAdjacentHTML("beforeend", newIngGroup);
        });

    }

    bindAddMeal(handler) {
        this.mainSec.addEventListener('click', event => {
            if (event.target.classList.contains('add-meal')) {
                const id = parseInt(event.target.parentElement.parentElement.id)
                console.log(id)


                event.target.textContent = "Added to order"

                setInterval(function addedMeal() {
                    event.target.textContent = "Add Meal"
                }, 3000)


                let curCount = parseInt(this.mealCount.innerHTML)
                curCount = curCount + 1
                this.mealCount.innerHTML = curCount

                handler(id)
            } else {
                console.log("didnt'work")
            }
        })
    }

    bindDeleteMeal(handler) {
        this.curMealList.addEventListener('click', event => {
            if (event.target.classList.contains('delete-meal')) {
                const id = parseInt(event.target.parentElement.id)

                let curCount = parseInt(this.mealCount.innerHTML)
                curCount = curCount - 1
                this.mealCount.innerHTML = curCount

                handler(id)
            }
        })
    }

    searchMeal(meals) {
        this.searchForm.addEventListener("submit", e => {
            e.preventDefault();

            let mealList = [];

            for (let m of meals) {
                if (this.searchInput.value === m.name) {
                    mealList.push(m)
                }
            }
            this.mealList.innerHTML = " "
            this.displayMeals(mealList)
        });

    }

    cuisineSelect(meals) {
        for (let btn of this.cuisBtns) {
            btn.addEventListener("click", e => {
                let curBtn = e.target.id

                for (let b of this.cuisBtns) {
                    if (b.id === curBtn) {
                        b.classList.add('selected')
                    } else {
                        b.classList.remove('selected')
                    }
                }

                let key = btn.textContent;
                let mealList = [];
                for (let m of meals) {
                    m.tags.forEach((tag) => {
                        if (key === tag) {
                            mealList.push(m);
                        }
                    });
                }
                this.mealList.innerHTML = " ";
                this.displayMeals(mealList);
            });
        }
    }



}

class Controller {
    constructor(model, view) {
        this.model = model,
            this.view = view

        this.initMealLoad(this.model.meals)
        this.initAutoComplete(this.model.meals)
        this.view.searchMeal(this.model.meals)
        this.view.cuisineSelect(this.model.meals)
        this.view.renderCurMeals(this.model.curList)

        // bindHandlers
        this.view.bindAddMeal(this.handleAddMeal)
        this.view.bindDeleteMeal(this.handleDeleteMeal)
        this.view.bindDeleteIng(this.handleDeleteIng)

    }

    initMealLoad = (meals) => {
        this.view.displayMeals(meals)
        this.view.featuredMeal(meals)
    }

    initAutoComplete = (meals) => {
        this.view.autoComplete(meals)
    }

    handleAddMeal = (id) => {
        this.model.addMeal(id)
        this.view.renderCurMeals(this.model.curList)
    }

    handleDeleteMeal = (id) => {
        this.model.deleteMeal(id)
        this.view.renderCurMeals(this.model.curList)
    }

    handleDeleteIng = () => {
        this.view.deleteIng()
    }


}

const app = new Controller(new Model(), new View());
