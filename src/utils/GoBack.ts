import { useNavigate } from 'react-router-dom';

export function goBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
