

import sleep from "./../sleepFun";

const mergeFun = async (setArr, ArrForSorting, time) => {

    const merge = async (arr, left, mid, right) => {
        let leftArr = arr.slice(left, mid + 1);
        let rightArr = arr.slice(mid + 1, right + 1);
        
        leftArr.push({ number: Infinity });
        rightArr.push({ number: Infinity });

        let i = 0, j = 0;

        for (let k = left; k <= right; k++) {
            await sleep(time);

            if (leftArr[i].number <= rightArr[j].number) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }

            arr[k].color = "#FEE715FF";
            setArr([...arr]);
        }
    };

    const mergeSort = async (arr, left, right) => {
        if (left < right) {
            let mid = Math.floor((left + right) / 2);

            await mergeSort(arr, left, mid);
            await mergeSort(arr, mid + 1, right);

            await merge(arr, left, mid, right);
        }
    };

    await mergeSort(ArrForSorting, 0, ArrForSorting.length - 1);
};

export default mergeFun;
