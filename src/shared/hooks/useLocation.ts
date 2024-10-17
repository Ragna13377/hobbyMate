import { useEffect } from 'react';
import { getLocationByIp } from '@shared/api/location';

export const useLocation = () => {
	useEffect(() => {
		if (!sessionStorage.getItem('city') || !sessionStorage.getItem('country'))
			getLocationByIp().then((data) => {
				if (data) {
					sessionStorage.setItem('city', data.city);
					sessionStorage.setItem('country', data.country_name);
				}
			});
	});
};
