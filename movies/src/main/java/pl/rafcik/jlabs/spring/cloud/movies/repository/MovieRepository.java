package pl.rafcik.jlabs.spring.cloud.movies.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.rafcik.jlabs.spring.cloud.movies.model.Movie;

/**
 * Created by rafcik on 19.12.2017.
 */
@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
}
