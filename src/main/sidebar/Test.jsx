import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('https://leetcode.com/graphql');

const query = gql`
  {
    matchedUser(username: "vishalkushwaha2003") {
      username
      profile {
        userAvatar
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

const LeetCodeProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.request(query);
        setData(response.matchedUser);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.username}'s LeetCode Profile</h1>
      <img src={data.profile.userAvatar} alt={`${data.username}'s avatar`} />
      <h2>Submission Stats:</h2>
      <ul>
        {data.submitStats.acSubmissionNum.map((stat, index) => (
          <li key={index}>
            <strong>{stat.difficulty}:</strong> {stat.count} submissions ({stat.submissions} total)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeetCodeProfile;
