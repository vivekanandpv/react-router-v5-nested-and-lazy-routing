import React from 'react';
import { httpService } from '../http-service';
import { useQuery } from 'react-query';

export const getPosts = () => {
  return httpService.get('posts').then((r) => r.data);
};

const Playground = (props) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: 'get-users',
    queryFn: getPosts,
    refetchOnMount: false,
    refetchInterval: 10000, // in millis
  });

  if (isLoading) {
    return <p>We are fetching data for you!</p>;
  }

  if (isError) {
    return (
      <p className='text-danger'>Could not fetch the data from the server!</p>
    );
  }

  return (
    <>
      <h4>Playground</h4>
      <hr />
      <table className='table table-bordered table-sm'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.userId}</td>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Playground;
