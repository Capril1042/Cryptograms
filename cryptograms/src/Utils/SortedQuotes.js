// will sort quotes by category
export default function puzzlesByCategory(puzzleData, category) {
 return   puzzleData.filter(puzzle => puzzle.puzzles.category === category)
}