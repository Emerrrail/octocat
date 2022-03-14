import React from 'react';
import { useParams } from 'react-router-dom';

function RepoPage() {

const { repo } = useParams();

  return (
    <div>{repo}</div>
  )
}

export default RepoPage