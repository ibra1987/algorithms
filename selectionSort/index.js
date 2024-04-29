let numbers = [12,4,11,89,65,0,34,15,90,87]

/**
 * This an implementation of the  selection sort sort algorithm which consists of repeatedly swaping the smallest 
 *  or the largest element of the unsorted portion with the first element of the unsorted portion
 * Time complexity = O(n²) => double looping over the elements 
 * Space complexity = O(1) => algorithm does not need extra space, reorders elements in place
 * @param {*} arr 
 * @returns a  sorted array
 */
function selectionSort(arr){
    let n = arr.length;
    let i,j,min_idx;

    for(i=0;i<n;i++){
        min_idx = i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min_idx]){
                //swap position
                let temp = arr[min_idx];
                arr[min_idx] = arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;


}

console.log(selectionSort(numbers));