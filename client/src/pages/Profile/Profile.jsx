import React from "react";
import { Link } from "react-router-dom";
import SmallPost from "../../components/SmallPost/SmallPost";
import { useUser } from "../../context/user";

const ProfilePage = () => {
  const { user } = useUser();

  if (!user) {
    return <>Please authorize first!</>;
  }

  const userPosts = [
    {
      id: 1,
      title: "Post Title 1",
      date: "February 12, 2024",
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      title: "Post Title 2",
      date: "February 13, 2024",
      likes: 15,
      comments: 8,
    },
  ];

  return (
    <section className='container mt-4' style={{ marginBottom: "100px" }}>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='card mb-3'>
            <div className='card-body'>
              <h3 className='card-title'>Your Profile</h3>
              <div className='profile-details'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Gender</th>
                      <td>{user.gender}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Birth Date</th>
                      <td>{user.birthDate}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className='mt-4'>Your Posts</h4>
              <div className='user-posts'>
                {userPosts.map((post) => (
                  <SmallPost {...post} />
                ))}
              </div>

              <nav aria-label='Posts navigation'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      «
                    </Link>
                  </li>
                  <li className='page-item active'>
                    <Link className='page-link' to='#'>
                      1
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      2
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      3
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' to='#'>
                      »
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card card-body'>
            <h4 className='mb-3'>Your user</h4>
            <table className='table'>
              <tbody>
                <tr>
                  <th scope='row'>Total Posts</th>
                  <td>{user.totalPosts}</td>
                </tr>
                <tr>
                  <th scope='row'>Total Comments</th>
                  <td>{user.totalComments}</td>
                </tr>
                <tr>
                  <th scope='row'>Total Likes Received</th>
                  <td>{user.totalLikesReceived}</td>
                </tr>
                <tr>
                  <th scope='row'>Total Comments Received</th>
                  <td>{user.totalCommentsReceived}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
