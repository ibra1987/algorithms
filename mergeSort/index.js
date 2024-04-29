let numbers = [2,1,16,89,45,23,10,0,9,100,87,75]

/**
 * This an implementation of the  merge sort algorithm which consists of repeatedly 
 * divide the data set into two sets then pick a mid value of each set , every element is then compared to the mid value
 * producing recursively subesets one lower , one greater than the mid value,
 * Time complexity = O(nlogn) 
 * Space complexity = O(n) 
 * @param {*} arr 
 * @returns a  sorted array
 */

function mergeSort(arr){
    let n = arr.length;
    if (n <= 1) {
        return arr;
    }

    let i;
    let mid_idx = Math.floor(n/2)
    let leftPortion = [];
    let rightPortion = [];

    for(i=0;i<n;i++){
        
        if(arr[i]<arr[mid_idx]){
            leftPortion.push(arr[i]);
        }
        else if(arr[i]>arr[mid_idx]){
            rightPortion.push(arr[i]);
        }

    }
    ;
    ;
    
    return [...mergeSort(leftPortion),arr[mid_idx],...mergeSort(rightPortion)]
}

console.log(mergeSort(numbers));