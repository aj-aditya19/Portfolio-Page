import React, { useState, useEffect } from "react";
import "../styles/GitHubCalendar.css";

const GitHubCalendar = () => {
  const [contributions, setContributions] = useState([]);
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gitHubError, setGitHubError] = useState(false);
  const [leetError, setLeetError] = useState(false);

  useEffect(() => {
    fetchGitHubData();
    fetchLeetCodeData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const query = `
        query {
          user(login: "aj-aditya19") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (response.status === 403) {
        // API blocked - likely requires an auth token or rate-limited
        setGitHubError(true);
        generateMockGitHubData();
        return;
      }

      const result = await response.json();

      if (
        result.data?.user?.contributionsCollection?.contributionCalendar?.weeks
      ) {
        const weeks =
          result.data.user.contributionsCollection.contributionCalendar.weeks;
        const allDays = [];

        weeks.forEach((week) => {
          week.contributionDays.forEach((day) => {
            const dayDate = new Date(day.date);
            const twoMonthsAgo = new Date();
            twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

            if (dayDate >= twoMonthsAgo) {
              const level =
                day.contributionCount > 0
                  ? day.contributionCount > 10
                    ? 4
                    : day.contributionCount > 5
                      ? 3
                      : day.contributionCount > 1
                        ? 2
                        : 1
                  : 0;

              allDays.push({
                date: day.date,
                level,
                count: day.contributionCount,
              });
            }
          });
        });

        setContributions(allDays);
      }
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setGitHubError(true);
      generateMockGitHubData();
    }
  };

  const generateMockGitHubData = () => {
    const data = [];
    for (let i = 60; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const level = Math.floor(Math.random() * 5);

      data.push({
        date: date.toISOString().split("T")[0],
        level: level,
        count: Math.floor(Math.random() * 6),
      });
    }
    setContributions(data);
  };

  const fetchLeetCodeData = async () => {
    try {
      const query = `
        query {
          matchedUser(username: "aj_aditya_1907") {
            userCalendar(year: 2024) {
              activeYears
              submissionCalendar
            }
          }
        }
      `;

      const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      // If CORS blocked or response not ok, fallback to mock data
      if (!response.ok) {
        setLeetError(true);
        generateMockLeetCodeData();
        setLoading(false);
        return;
      }

      const result = await response.json();

      if (result.data?.matchedUser?.userCalendar?.submissionCalendar) {
        const calendar = JSON.parse(
          result.data.matchedUser.userCalendar.submissionCalendar,
        );
        const sixMonthsAgo = Math.floor(
          (new Date().getTime() - 180 * 24 * 60 * 60 * 1000) / 1000,
        );

        const leetcodeContributions = [];
        Object.entries(calendar).forEach(([timestamp, count]) => {
          const ts = parseInt(timestamp);
          if (ts >= sixMonthsAgo) {
            const date = new Date(ts * 1000);
            const level =
              count > 0
                ? count > 3
                  ? 4
                  : count > 2
                    ? 3
                    : count > 1
                      ? 2
                      : 1
                : 0;

            leetcodeContributions.push({
              date: date.toISOString().split("T")[0],
              level,
              count,
            });
          }
        });

        setLeetcodeData(leetcodeContributions);
      }
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
      setLeetError(true);
      generateMockLeetCodeData();
    }
    setLoading(false);
  };

  const generateMockLeetCodeData = () => {
    const data = [];
    for (let i = 180; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const level = Math.floor(Math.random() * 5);

      data.push({
        date: date.toISOString().split("T")[0],
        level: level,
        count: Math.floor(Math.random() * 3),
      });
    }
    setLeetcodeData(data);
    setLoading(false);
  };

  const groupByWeek = (data) => {
    const weeks = [];
    let currentWeek = [];

    data.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks = groupByWeek(contributions);
  const leetcodeWeeks = groupByWeek(leetcodeData);

  if (loading) {
    return (
      <div className="github-calendar">
        <div className="calendar-header">
          <h3>Loading Activity...</h3>
        </div>
      </div>
    );
  }

  const gitHubTotal = contributions.reduce((sum, day) => sum + day.count, 0);
  const leetcodeTotal = leetcodeData.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className="github-calendar">
      <div className="calendar-note-row">
        {gitHubError && (
          <p className="calendar-note">
            GitHub data restricted — showing recent mock data.
          </p>
        )}
        {leetError && (
          <p className="calendar-note">
            LeetCode blocked by CORS — showing mock data.
          </p>
        )}
      </div>

      <div className="calendars">
        {/* GitHub Calendar */}
        <div className="single-calendar">
          <div className="calendar-header">
            <h3>GitHub Contribution Activity (Last 2 Months)</h3>
            <p className="total-contributions">{gitHubTotal} contributions</p>
          </div>

          <div className="calendar-container">
            <div className="calendar-days">
              {daysOfWeek.map((day) => (
                <div key={day} className="calendar-day-label">
                  {day}
                </div>
              ))}
            </div>

            <div className="calendar-grid">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="calendar-week">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      className={`calendar-cell level-${day.level}`}
                      title={`${day.count} contributions on ${day.date}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="calendar-legend">
            <span className="legend-label">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className={`legend-cell level-${level}`}></div>
            ))}
            <span className="legend-label">More</span>
          </div>
        </div>

        {/* LeetCode Calendar */}
        <div className="single-calendar">
          <div className="calendar-header">
            <h3>LeetCode Activity (Last 6 Months)</h3>
            <p className="total-contributions">
              {leetcodeTotal} problems solved
            </p>
          </div>

          <div className="calendar-container">
            <div className="calendar-days">
              {daysOfWeek.map((day) => (
                <div key={day} className="calendar-day-label">
                  {day}
                </div>
              ))}
            </div>

            <div className="calendar-grid">
              {leetcodeWeeks.map((week, weekIndex) => (
                <div key={weekIndex} className="calendar-week">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      className={`calendar-cell leetcode-level-${day.level}`}
                      title={`${day.count} problems solved on ${day.date}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="calendar-legend">
            <span className="legend-label">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`legend-cell leetcode-level-${level}`}
              ></div>
            ))}
            <span className="legend-label">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubCalendar;
