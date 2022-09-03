class Solution:
    def search(self, arr: List[int], target: int) -> int:
        n=len(arr)
        left=0
        right=n-1
        while left<=right:
            # 重点1：当left符合时直接返回, 因为找的是最小的索引
            if arr[left]==target:
                return left
            mid=left+(right-left)//2
            # 重点2：当中间值等于目标值，将右边界移到中间，因为左边可能还有相等的值
            if arr[mid]==target:
                right=mid
            elif arr[0]<arr[mid]:
                if arr[0]<=target<arr[mid]:
                    right=mid-1
                else:
                    left=mid+1
            elif arr[0]>arr[mid]:
                if arr[mid]<target<=arr[n-1]:
                    left=mid+1
                else:
                    right=mid-1
            else:
                # 重点3：当中间数字与左边数字相等时，将左边界右移
                    left+=1
        return -1