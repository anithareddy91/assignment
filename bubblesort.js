
var arr = [1,9,2,7,4,6];
var i,temp;
var len=arr.length;
for (i = 0; i <= len; i++)
{
    if (arr[i] > arr[i+1])
    {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        i=i-2;
        console.log(i);
    }
}
console.log(arr);