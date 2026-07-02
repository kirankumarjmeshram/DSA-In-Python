class Solution:
    def maxLength(self, arr):
        # code here
        prefixSum = 0
        longSubArrLen = 0
        map = {}
        for i in range(len(arr)):
            prefixSum += arr[i]
            
            if prefixSum == 0:
                longSubArrLen = i+1;
                
            
            if prefixSum in map:
                longSubArrLen = max(longSubArrLen, i - map[prefixSum])
            else:
                map[prefixSum] = i
        return longSubArrLen