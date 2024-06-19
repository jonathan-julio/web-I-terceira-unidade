import React from 'react';

function Blocked({ title, value , fetch}) {



  return (
    <div className="col-lg-6 p-2">
      <div className="">
        <form className="dadosPortfolio" onSubmit={fetch}>
          <fieldset className="border p-4">
            <legend className="w-auto">{title}</legend>
            <textarea rows="5" className="form-control mt-2" placeholder='Clique em buscar' aria-label="With textarea" value={value} disabled></textarea>
            <div className="text-center pt-3">
              <button type="submit" className="btn btn-dark">Buscar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Blocked;
