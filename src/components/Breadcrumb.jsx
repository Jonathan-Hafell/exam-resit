import PropTypes from "prop-types";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadcrumbComponent = ({ breadcrumbs }) => {
  return (
    <Container className="p-0 m-0">
      <nav aria-label="breadcrumb">
        <Breadcrumb className="bg-body-tertiary rounded-3">
          {breadcrumbs.map((breadcrumb) => (
            <Breadcrumb.Item
              key={breadcrumb.path}
              active={breadcrumb.active}
              linkAs={breadcrumb.active ? "span" : Link}
              linkProps={{ to: breadcrumb.path }}
            >
              {breadcrumb.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </nav>
    </Container>
  );
};

BreadcrumbComponent.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default BreadcrumbComponent;
