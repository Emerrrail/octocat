import React from 'react'

function Languages ({ language, percentage }) {
    return (
        <div className='repoPage__language'>
            <div className='repoPage__language_name'>
                {language}:
            </div>
            <div>
                {percentage}
            </div>
        </div>
    )
}

export default Languages
