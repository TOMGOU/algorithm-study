# 双指针

## 双指针的理解

- 双指针，指的是在遍历对象的过程中，不是普通的使用单个指针进行访问，而是使用两个相同方向（快慢指针）或者相反方向（对撞指针）的指针进行扫描，从而达到降低三次 for 循环时间复杂度的目的，有的时候结合排序有奇效。

## 双指针的应用场景

- 优势：结合排序减少不必要的重复计算，降低时间复杂度。

- 应用场景：寻找两端边界，比如：

  * 三数之和为0：首先排序，遍历数组，当前元素作为三数中的第一个数，另外两个数通过由两边向中间移动的双指针寻找。细节注意：为了避免重复，指针每一次移动之前都判断一下是否当前元素与下一个元素相等，相等就跳过。
  
  * 最大矩形面积：由中间向两边移动的双指针可以计算当前矩形的最大面积：左边界和右边界条件都是：小于当前矩形高度。（可惜超时）

### LeeCode 题目：15、84