#include <iostream>

int main() {
    int sum,digiti,sumi;
    sum = 21;
    while (sum > 0) {
        digiti = sum % 10;
        sumi = sumi + digiti;
        sum = sum /10;
    }
    std::cout << sumi;
}