class Solution:
    
    #Function to check whether there is a subarray present with 0-sum or not.
    def subArrayExists(self,arr):
        ##Your code here
        #Return true or false
        prefixSum = 0;
        map = {};
        for num in arr:
            prefixSum += num
            if prefixSum == 0 or prefixSum in map:
                return True
                
            map[prefixSum] = True;
        return False;
