## ReactJs Assignment - Scaleupally

## Assignment Description

You need to build a web application that simulates an ATM machine. The application should allow users to deposit and withdraw money in denominations of Rs. 100, Rs. 500, Rs. 1000, and Rs. 2000. The application should also display the current account balance, and throw an error message if the user tries to withdraw an amount greater than the current balance.

## Requirements

The application should have the following features:

1. **Account Balance:** The application should display the current account balance to the user.

2. **Deposit Money:** Users should be able to deposit money by selecting the denomination (Rs. 100, Rs. 500, Rs. 1000, or Rs. 2000) and entering the number of notes they wish to deposit. The account balance should be updated accordingly.

3. **Withdraw Money:** Users should be able to withdraw money by entering the amount they wish to withdraw. The application should validate that the requested amount is available in the account balance, and should display an error message if it is not. If the amount is available, the application should dispense the money in the minimum number of notes (i.e. the fewest number of Rs. 2000, Rs. 1000, Rs. 500, and Rs. 100 notes required to meet the withdrawal amount) and update the account balance accordingly.

## Technical Requirements

The application should be built using ReactJs and should use local storage to persist the account balance and transaction history across page refreshes. You are free to use any additional libraries or tools that you feel are necessary to complete the task.

For UI there is no any figma or predefined UI design, Please use your creativity and design the basic, clean UI with responsive design for mobile, tablets, and desktop.

Reference for UI design of components : https://mui.com/ , https://ant.design/

You can use any ui framework like : tailwind, mui or ant design (tailwind css is preferred)

Note : UI should be responsive and clean.

## Evaluation Criteria

Candidate will be evaluated on the following criteria:

1. **Functionality:** The application should meet all of the requirements listed above and should function correctly and smoothly.

2. **Code Quality:** The candidate's code should be well-organized, readable, and maintainable. They should use appropriate best practices and follow a consistent coding style.

3. **User Interface Design:** The application should have a responsive and user-friendly interface that is easy to navigate and use.

4. **Problem Solving and Creativity:** The candidate should show creative thinking and problem-solving skills in implementing the required features.

## Submission Instructions

candidate should submit their completed code, along with any necessary instructions for running the application, in a GitHub repository. They should also provide a brief write-up explaining their design choices and any challenges they faced during the development process.

Some important note / explaination : 
ATM simulator should dispense money as per the amount available and the notes available for 100, 500, 1000, 2000.
for example I deposited 2 notes of 2000,
My balance will be 4000 now
and now I request to withdraw for 500, but there are only 2 notes of 2000. So it should throw error, and not withdraw the amount.

Thanks!