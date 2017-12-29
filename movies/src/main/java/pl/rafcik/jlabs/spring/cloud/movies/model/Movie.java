package pl.rafcik.jlabs.spring.cloud.movies.model;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by rafcik on 19.12.2017.
 */
@Data
@Entity
@Table(schema = "public", name = "movie")
public class Movie {
    @Id
    @GeneratedValue(generator = "movie_id_sequence", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "movie_id_sequence", sequenceName = "movie_id_sequence")
    @Column(name = "movie_id")
    private Long movieId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;
}
