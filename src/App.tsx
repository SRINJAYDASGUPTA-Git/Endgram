import './globals.css'
import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import { Toaster } from "@/components/ui/toaster"
const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* public */}
                <Route element={<AuthLayout />}>
                    <Route path='/signin' element={<SigninForm />} />
                    <Route path='/signup' element={<SignupForm />} />
                </Route>

                {/* private */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
            <Toaster />
        </main>
    )
}

export default App