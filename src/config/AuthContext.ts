import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Mock fetching user data
        const fetchUser = async () => {
            const response = await mockApiCall();
            setUser(response.user);
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value= {{ user }
}>
    { children }
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

const mockApiCall = async () => {
    // Simulate API call to fetch user data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ user: { role: 'admin', name: 'Admin User' } });
        }, 1000);
    });
};
