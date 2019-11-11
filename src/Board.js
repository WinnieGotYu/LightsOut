import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      hasWon: false,
      board: this.createBoard()
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
    this.clickCounter = this.clickCounter.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell is lit (false)*/

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(true);
      }
      board.push(row);
    }
    return board;
  }

  clickCounter() {
    this.setState(st => ({
      count: st.count + 1
    }));
  }

  restartGame() {
    this.setState(st => ({
      count: 0,
      hasWon: false,
      board: this.createBoard()
    }));
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */
  render() {
    // if the game is won, just show a winning msg & render nothing else
    if (this.state.hasWon) {
      return (
        <div className="winner">
          <img src="https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif" alto="winner"/>
          <h1>You Win! </h1>
          <button className="startBtn" onClick={() => this.restartGame()}>Restart Game</button>
        </div>
      );
    }
    // make table board: rows of Cell components
    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            coord={coord}
            flipCellsAroundMe={this.flipCellsAround}
            clickCounter={this.clickCounter}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div>
        <span className="counter">Clicks: {this.state.count}</span>
        <button className="startBtn" onClick={() => this.restartGame()}>
          Restart Game
        </button>
        <table className="Board">
          <tbody>{tblBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
