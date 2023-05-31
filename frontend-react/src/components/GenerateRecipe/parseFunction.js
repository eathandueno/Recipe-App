export default function extractRecipeData(responseData) {
    const lines = responseData.split('\n');
  
    let title = "";
    let ingredientList = [];
    let instructions = [];
    let cookTime = "";
    let calories = "";
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
  
      if (line.toLowerCase().startsWith('title:')) {
        title = line.replace('Title:', '').trim();
      } else if (line.toLowerCase().startsWith('ingredients:')) {
        i++;
        while (i < lines.length && lines[i].trim() !== "") {
          ingredientList.push(lines[i].trim());
          i++;
        }
      } else if (line.toLowerCase().startsWith('instructions:')) {
        i++;
        while (i < lines.length && lines[i].trim() !== "") {
          instructions.push(lines[i].trim());
          i++;
        }
      } else if (line.toLowerCase().startsWith('cook time:')) {
        cookTime = line.replace('Cook Time:', '').trim();
      } else if (line.toLowerCase().startsWith('calories:')) {
        calories = line.replace('Calories:', '').trim();
      }
    }
  
    return {
      title,
      ingredientList,
      instructions,
      cookTime,
      calories,
    };
  }
  