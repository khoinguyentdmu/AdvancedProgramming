package tdmu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tdmu.model.ToDo;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {

}
