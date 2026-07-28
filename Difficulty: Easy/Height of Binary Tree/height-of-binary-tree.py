'''
Definition for Node
class Node:
    def _init_(self, val):
        self.data = val
        self.left = None
        self.right = None
'''

class Solution:
    def height(self, root):
        # code here
        if root == None:
            return -1
        else:
            return 1 + max(self.height(root.left), self.height(root.right))