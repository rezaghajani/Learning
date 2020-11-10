package main 

import "fmt"

func main() {
	x := 15
	a := &x // addressing variable a to x
	fmt.Println(a)
	fmt.Println(*a)

	*a = 5
	fmt.Println(x)
}