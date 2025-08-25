## Getting Started

First, run the development server:
This project is a simple authentication demo built with Next.js 13+ (App Router), using [iron-session](https://github.com/vvo/iron-session) for stateless session management.

### Features

- **Login/Logout**: Simple login form with username and password.
- **Session Management**: Uses `iron-session` to store session data securely in cookies.
- **Premium Toggle**: Ability to toggle a "Pro" (premium) status for the user.
- **Change Username**: Update the username in the session.
- **Server Actions**: All authentication logic is handled using Next.js Server Actions.
- **Client Components**: Includes a client-side login form using React.

### Project Structure

- `src/actions.ts`: Contains all server actions for authentication and session management.
- `src/components/LoginForm.tsx`: Client component for the login form.
- `app/page.tsx`: Main page, can be edited to customize the UI.

### Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**
   (see below for commands)

3. **Login Credentials:**

   - Default username: `mike`
   - Default password: (any, since password is not checked in demo)

4. **Changing Username or Premium Status:**
   - Use the provided UI (if implemented) to change your username or toggle premium.

### Notes

- This project is for demonstration purposes and does not connect to a real database.
- All user data is stored in memory and in the session cookie.
- For production, you should implement proper password checks and persistent user storage.

For more details, see the code in `src/actions.ts` and `src/components/LoginForm.tsx`.
