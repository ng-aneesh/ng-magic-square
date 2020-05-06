import { Component, Input } from '@angular/core';

@Component({
  selector: 'magic-square',
  templateUrl: './magic-square.component.html',
  styles: [`h1 { font-family: Lato; } td { border: 2px solid grey} td { text-align: center} .sum{background-color: yellow; font-weight: bold}`]
})
export class MagicSquareComponent  {
  /**
   * @author Aneesh Nair
   * @description Magic Square Algorithm
   */

  matrixType: Number = 3;
  startVal: Number = 1;
  resultMatrix: any = [];
  dSum: Number = 0;

  sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }

  calculateColumnSum(index) {
    let arr = [];
    for(let jIndex = 0; jIndex < this.matrixType; jIndex++){
      arr.push(this.resultMatrix[jIndex][index]);
    }
    return this.sum(arr);
  }

  diagonalSum(inverseDiagonal) {
    let dArr = [];
    let startVal = inverseDiagonal ? 0 :  this.matrixType;
    if(this.matrixType) {
      for (let index = 0; index < this.matrixType; index++) {
        dArr.push(this.resultMatrix[index][index]);
      }
    }
    else {
      for (let index = <any>this.matrixType; index > 0; index--) {
        dArr.push(this.resultMatrix[index][index]);
      }
    }
    this.dSum = this.sum(dArr);
    return this.dSum;
  }

  onMatrixChange(event) {
    let initMatrix = this.createBlankArray(this.matrixType);
    let finalMatrix = this.solveAlgo(this.matrixType);
    this.resultMatrix = finalMatrix;
    this.diagonalSum(true);
  }

  createBlankArray(matrixType) {
    let matrix = [[]];
    for(let index = 0; index < matrixType; index++){
      matrix[index] = new Array();
      for(let jIndex = 1; jIndex <= matrixType; jIndex++) {
          matrix[index].push(0);
      }    
    }
    return matrix;
  }

  solveAlgo(matrixType) {
    // Initialize values
    let result = this.createBlankArray(matrixType);
    let i = Math.floor(matrixType/2); 
    let j = matrixType-1; 
    
    for (let num = 1; num <= matrixType*matrixType;) 
    { 
        // Condition to check column & row overflow 
        if (i == -1 && j == matrixType) 
        { 
          j = matrixType - 2; 
          i = 0; 
        } 
        else
        { 
          // Condition to check matrix column limit
          if (j == matrixType) {
            j = 0;
          } 
                
          // Condition to check matrix row limit
          if (i < 0) {
            i = matrixType - 1;
          }                 
        }          
        // Condition if already number is entered
        if (result[i][j] != 0)  
        { 
          j -= 2; 
          i++; 
          continue; 
        } 
        else {
          // Set number in matrix 
          result[i][j] = num++;  
        } 
        j++;  i--;  
    }
    return result;
  }


  constructor() {   
    let finalMatrix = this.solveAlgo(this.matrixType);
    this.resultMatrix = finalMatrix;
    this.diagonalSum(true);
    //console.log(this.resultMatrix);    
  }

}
