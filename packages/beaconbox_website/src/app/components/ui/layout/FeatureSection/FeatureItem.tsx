const FeatureItemWrapper = styled.div`
  background-color: var(--feature-bg-color, #fff);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: left;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid #e0e0e0;
  
  &:hover {
    transform: scale(1.08) rotate(-1deg);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 48%;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1025px) {
    width: 24%;
  }
`;