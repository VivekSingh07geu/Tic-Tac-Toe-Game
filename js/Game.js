export default class Game {

    constructor(){
        console.log("Game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        }
        else {
            this.turn = "X";
        }
    }

    makeMove(i){
        if(this.endOfGame()) {
            return;
        }

        if(this.board[i] != null)
            return;
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombination();

        if(!winningCombination){
            this.nextTurn();
        }
    }

    findWinningCombination(){
        const winningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        // loop throught and find if anyone wins or not

        for(const combination of winningCombination){
            const [a,b,c] = combination;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }

        }

        return null;
    } 

    endOfGame() {
        let winningCombination = this.findWinningCombination();

        if(winningCombination){
            return true;
        }
        else
            return false;
    }
}