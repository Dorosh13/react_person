import React from 'react';
import './Person.scss';

export function Person({ name, age, sex, isMarried, partnerName }) {
  const partnerSex = (sex === 'f') ? 'husband`s' : 'wife`s';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? <p className="Person__age">{`I am ${age}`}</p>
        : null
      }
      {(isMarried)
        ? (
          <p className="Person__partner">
            {`My ${partnerSex} name is ${partnerName}`}
          </p>
        )
        : <p className="Person__age">I am not married</p>
      }
    </section>
  );
}
