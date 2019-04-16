// takes in puzzle data and returns a list of categories
export default function categorize(puzzleData) {
    let categoryArray = [];
    for(let puzzle in puzzleData) {
    if( !categoryArray.includes(puzzleData[puzzle].puzzles.category)) {
        categoryArray.push(puzzleData[puzzle].puzzles.category);
        }
    }
    return categoryArray;
};