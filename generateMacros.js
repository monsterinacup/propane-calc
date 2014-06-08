function generateMacros() {
	
	//Set the appropriate variables based on user gender
	gender = document.inputForm.gender.value;
	if (gender == "male") {
		var calorieMetric = 15;
		var proteinMetric = 2.5;
		var fatMetric = 0.2;
	} else {
		var calorieMetric = 13;
		var proteinMetric = 1.8;
		var fatMetric = 0.3;
	}

	//Did the user select Fat Loss or Muscle Gain?
	var dietType = document.inputForm.dietChoice.value; 
	if (dietType === "cut") {
		//Fat Loss - 90% of maintenance
		var dietMetric = 0.9; 
	} else {
		//Muslce Gain - 110% of maintenance
		var dietMetric = 1.1;
	}

	//Take a value from bodyweight entry for calculations
	bw = parseFloat(document.inputForm.bodyWeight.value); 
	
	//Was the unit kg or lbs
	unitChoice = document.inputForm.unitChoice.value;
	if (unitChoice == "kg") {
		bw = bw * 2.2;
	}

	//Set the total calories from the info so far
	var totalCalories = Math.floor(bw * calorieMetric * dietMetric);

	//Set the amount of calories from fat
	var fatCalories = Math.floor(totalCalories * fatMetric);
	var fatGrams = Math.floor(fatCalories / 9);

	//Set the amount of protein required
	var proteinGrams = Math.floor(bw / 2.2 * proteinMetric);
	var proteinCalories = proteinGrams * 4;

	//Calculate carbs
	var carbCalories = totalCalories - fatCalories - proteinCalories;
	var carbGrams = Math.floor(carbCalories / 4);
		

	//Write the outputs to the user
	document.outputs.calories.value = totalCalories;
	document.outputs.protein.value = proteinGrams;
	document.outputs.carbs.value = carbGrams;
	document.outputs.fat.value = fatGrams;

}