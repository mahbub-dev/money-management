import { useState, useEffect, useContext, createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [user, setUser] = useState("");
	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
