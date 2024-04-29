let numbers = [12,17,9,0,45,87,67,44,10,78,-2]


/**
 * This an implementation of the  bubble sort algorithm which consists of repeatedly swaping adjacent elements 
 * if they are in the wrong order 
 * Time complexity = O(n²) => double looping over the elements 
 * Space complexity = O(1) => algorithm does not need extra space, reorders elements in place
 * @param {*} arr 
 * @returns a  sorted array
 */

function bubbleSort(arr){

    let n = arr.length;
    let i;

    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(numbers));