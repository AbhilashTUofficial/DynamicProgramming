
def run():
	memo={}
	print(fib(30, memo))
	#print(gridTraveler(18, 18, memo))
	#print(canSum(300,[7,14],memo))
	#print(howSum(7,[2,4],memo))
	
	
def fib(n, memo):

	if(n in memo):return memo[n]
	if(n<=2):return 1
	
	memo[n]=fib(n-1, memo)+fib(n-2, memo)
	return memo[n]
	
def gridTraveler(m, n, memo):
	key=m,',',n
	if(key in memo):return memo[key]
	
	if(m==1 and n==1):return 1;
	if(m==0 or n==0):return 0;
	
	memo[key]= gridTraveler(m-1, n, memo)+gridTraveler(m, n-1, memo)
	return memo[key]
	
def canSum(n,arr,memo):
	if(n in memo): return memo[n]
	if(n==0): return True
	if(n<0): return False
	for nums in arr:
		remainder=n-nums
		if(canSum(remainder,arr,memo)==True):
			memo[n]= True
			return True
	memo[n]=False
	return False
	
def howSum(n,arr,memo):
	if(n in memo):return memo[n]
	if(n==0):return []
	if(n<0):return 0
	for nums in arr:
		remainder=n-nums
		remainderResult=howSum(remainder,arr,memo)
		if(remainderResult!=0):
			memo[n]=[*remainderResult,nums]
			return memo[n]
	memo[n]=0
	return 0

run()



