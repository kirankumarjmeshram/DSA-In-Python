/**
 * @param {Node} head
 */

/* Structure of linked list Node
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/
class Solution {
    removeLoop(head) {
        let slow = head;
        let fast = head;
        while(fast!==null && fast.next !==null) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) {
                break;
            }
        }
        if(fast === null || fast.next === null ) {
            return;
        }
        slow = head;
        
        // if(slow === fast) {
        //     while(fast.next !== slow) {
        //         fast = fast.next
        //     }
        //     fast.next = null;
        //     return;
        // }
        
        //Finds the start of the loop.
        while(slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        } 
        // here both pointers are at the start of the loop, not at the last node.
        
        //So we first find the last node in the loop.
        while(fast.next !== slow) {
            fast = fast.next;
        }
        //fast is the last node of the loop
        //Breaks the loop correctly.
        fast.next = null;
        
    }
}