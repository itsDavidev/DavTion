import { useNavigate } from 'react-router-dom';
import { StyleRedirecNots } from './StyledRedirecNots';
const RedirecNotes = () => {
  const navigate = useNavigate();
  return (
    <StyleRedirecNots>
      <h2>Notes</h2>
      <button
        onClick={() => {
          navigate('/notes');
        }}
      >
        All Notes
      </button>

      <h2>Category</h2>
      <button
        onClick={() => {
          navigate('/notes/category/daily');
        }}
      >
        Daily
      </button>
      <button
        onClick={() => {
          navigate('/notes/category/ideas');
        }}
      >
        Ideas
      </button>
      <button
        onClick={() => {
          navigate('/notes/category/school');
        }}
      >
        School
      </button>
      <button
        onClick={() => {
          navigate('/notes/category/work');
        }}
      >
        Work
      </button>
      <button
        onClick={() => {
          navigate('/notes/category/others');
        }}
      >
        others
      </button>

      <h2>Important</h2>

      <button>Important</button>
    </StyleRedirecNots>
  );
};

export default RedirecNotes;