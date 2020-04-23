#include <iostream>


int main() {
    int x;
    std::cin >> x;
    if (x > 100 and x <= 6000) {
        std::cout << "Steam\n";
    } else if (x < 0 and x >= -273) {
            std::cout << "Ice\n";
    } else if (x == 0 and x == 100) {
        std::cout << "Water\n";
    } else {
        std::cout << "Water\n";
    }
    
}

