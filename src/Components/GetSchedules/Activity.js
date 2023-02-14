import { Stack, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';
import { object, string } from "yup";

const validationSchema = object({
  name: string().required("Must not be empty"),
  tag: string().required("Tags are compulsory"),
});
function Activity({activities, setActivities}) {
    const initialValues = {
        name: "",
        tag: "",
      };
      const validationObj = validationSchema;
      const onSubmit =(values)=>{
        console.log(activities);
        let temp = activities;
        temp.push(values)
        setActivities(temp);
      };
  return (
    <Stack padding="2rem">
      <Typography variant="h3" sx={{marginBottom:"1rem"}}>Define Your Activities</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationObj}
      >
        <Form id="form">
          <div>
            <label htmlFor="name">Name</label><br/><br/>
            <Field type="text" name="name" id="name" placeholder="Name of your activity" />
            <ErrorMessage id="error" name="name" />
          </div>

          <div>
            <label htmlFor="tag">Tag</label><br/><br/>
            <Field as="select" name="tag" id="tag" placeholder="Tag Name">
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="afternoon">Afternoon</option>
            </Field>
            <ErrorMessage name="tag" />
          </div>
          <div>
            <Typography variant="body">Or Create Your Custom Tags <Link to="/dashboard/generateTags">Here</Link></Typography>
          </div>
          <div>
            <Field type="submit" id="submit" value="SUBMIT"/>
          </div>
        </Form>
      </Formik>
    </Stack>
  )
}

export default Activity