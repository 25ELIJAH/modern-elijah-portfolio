import Section from '../../shared/components/Section';
import { achievements } from '../../shared/data/portfolioStructure';

const Achievements = () => (
  <Section id="achievements" eyebrow="Achievements" title="Milestones, campaign wins, and successful launches.">
    <ul className="feature-list stat-list">
      {achievements.map((achievement) => (
        <li key={achievement.label}>
          <strong>{achievement.value}</strong>
          <span>{achievement.label}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Achievements;
